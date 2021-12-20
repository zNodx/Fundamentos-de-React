import './Table.css'
import produtos from "../../data/produtos";

export default props =>{

    const tb = produtos.map((produto,i) => {
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'Par': ''}>
                
                <td>{produto.id}</td>
                <td>{produto.name}</td>
                <td>R${produto.price.toFixed(2)}</td>

            </tr>
        )
    })

    return (
<div className="TabelaProdutos">
<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
  </tr>
    {tb}     
</table> 
        </div>
    )
    
}