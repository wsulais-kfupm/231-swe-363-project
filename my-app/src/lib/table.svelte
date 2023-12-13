<script>
// @ts-nocheck

    
    let markets=['Tamimi', 'Othaim', 'Panda']
    let variants=['Chicken Curry', 'Vegetables', 'Stir Fried']
    let quantities=['75g', '5x75g', '20x75g']
    let yAxis
    let xAxis
    let yAxisText
    export let group
    $:{if (group=='Market'){
        yAxis=variants
        xAxis=quantities
        yAxisText='Variants'
    }
    else if (group=='Variant'){
        yAxis=markets
        xAxis=quantities
        yAxisText='Markets'
    }
    else if (group== 'Quantity'){
        yAxis=variants
        xAxis=variants
        yAxisText='Variants'
    }
    else{
        yAxis=['x', 'y', 'z']
        xAxis=['x', 'y', 'z']
    }}
</script>


<table>
    <tr>
        <th><div>{yAxisText}</div></th>    
        {#each xAxis as x}
            <th><div><span class="header">{x}</span></div></th>
        {/each}
    </tr>
        
    
        
    {#each yAxis as y}
        <tr>
            <td><div> <span class="value">{y}</span></div></td>
            <td><div><span class="value">Forward</span></div></td>
            <td><div><span class="value">Forward</span></div></td>
            <td><div><span class="value">Forward</span></div></td>
        </tr>
    {/each}
</table>


<style>
    table{
        display: flex;
        min-width: var(--max-w-xs, 400px);
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        border-radius: 4px;
        background: #363636;
        /* shadow */
        box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);
    }
    th{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        border-top: 1px solid var(--gray-300, #D1D5DB);
        border-right: var(--Boxed, 0px) solid var(--gray-300, #D1D5DB);
        border-bottom: var(--Boxed, 0px) solid var(--gray-300, #D1D5DB);
        border-left: var(--Boxed, 0px) solid var(--gray-300, #D1D5DB);
        background: var(--gray-200, #E5E7EB);
    }

    tr{
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        background: var(--black, #000);
    }

    div{
        display: flex;
        padding: 10px 12px;
        align-items: flex-start;
        align-self: stretch;
        border-radius: var(--Boxed, 0px);
    }
    td{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        border-top: 1px solid var(--gray-300, #D1D5DB);
        border-right: var(--Boxed, 0px) solid var(--gray-300, #D1D5DB);
        border-bottom: var(--Boxed, 0px) solid var(--gray-300, #D1D5DB);
        border-left: var(--Boxed, 0px) solid var(--gray-300, #D1D5DB);
        background: var(--gray-50, #F9FAFB);
    }

    .header{
        color: var(--black, #000);
        text-align: center;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; /* 15.6px */
    }

    .value{
        flex: 1 0 0;
        color: var(--black, #000);
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 15.6px */
    }
</style>
