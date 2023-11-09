{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    # nixpkgs.url = "github:NixOS/nixpkgs/haskell-updates";
    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true;
          };
        };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # haskellPackages.pandoc_2_19_2
            pandoc
            ruff
            black
            nodePackages.pyright
            python3Packages.requests
            python3Packages.cattrs
            python3Packages.orjson
          ];
        };
      }
    );
}
