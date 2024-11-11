import styles from "./ItemEstoque.module.css"

export default function ItemEstoque({ id, name, number, price, more, less }) {
    return (
    <>
        <div className={styles.produtoItem}>
            <p className={styles.nomeProduto}>{name}</p>
            <p className={styles.quatidadeProduto}>{number}</p>
            <p className={styles.valorProduto}>{price}</p>
            <button className={styles.botoesAcoes} onClick={() =>{
                more(id,number+1)
            }}>+</button>
            <button className={styles.botoesAcoes} onClick={() =>{
                less(id,number-1)
            }}>-</button>
        </div>
    </>
    );
}