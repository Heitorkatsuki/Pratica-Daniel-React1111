import styles from "./FormularioProduto.module.css"

export default function FormularioProduto({addItem}){

    const [itemText, setItemText] = useState('')
    const [itemNumber, setItemNumber] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const itemName = useRef()
    const itemQuantity = useRef();
    const itemSell = useRef();
    const itemBuy = useRef();
    return (
    <>
        <h2>Caixa</h2>
        <input
            className={styles.input}
            type="text"
            ref={itemName}
            onChange={(e) => setItemText(e.target.value)}
            placeholder="Nome do produto:"
            value={itemText}
        />
        <input
            className={styles.input}
            type="number"
            ref={itemNumber}
            onChange={(e) => setItemText(e.target.value)}
            placeholder="Quantidade em estoque:"
            value={itemQuantity}
        />
        <input
            className={styles.input}
            type="number"
            ref={itemPrice}
            onChange={(e) => setItemText(e.target.value)}
            placeholder="Valor de compra"
            value={itemSell}
        />
        <input
            className={styles.input}
            type="number"
            ref={itemName}
            onChange={(e) => setItemText(e.target.value)}
            placeholder="Valor de venda"
            value={itemBuy}
        />

        <button
            type="submit"
            className={styles.botao}
            onClick={() => {
                const taskText = itemName.current.value;
                const taskNumber = itemNumber.current.value;
                const taskPrice = itemPrice.current.value;
                const taskSell = itemSell.current.value;

                if (taskText.trim() !== "") {
                addTask(taskText, taskNumber, taskPrice);
                setItemText("");
                taskInputRef.current.value = "";
                }
            }}
        >
            Adicionar tarefa
        </button>
        </>
    );
}