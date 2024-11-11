import ItemEstoque from "../ItemEstoque/ItemEstoque";

export default function ListaEstoque({itens,more,less}){
    return (
      <>
        {itens.map((item) => (
          <ItemEstoque>
            id={item.id}
            title={item.title}
            number={item.number}
            price={item.price}
            more={more}
            less{less}
          </ItemEstoque>
        ))}
      </>
    );
}