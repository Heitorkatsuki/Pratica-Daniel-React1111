import FormularioProduto from "../FormularioProduto/FormularioProduto";
import ItemEstoque from "../ItemEstoque/ItemEstoque"
import styles from "./App.module.css"

export default function App({ }){

    const [itens, setTasks] = useState([]);

    const addItem = (title,number,price) => {
        const item = {
            id: Date.now(),
            title,
            number,
            price
        };
        setTasks([...itens, item]);
    };

    const more = (id, newNumber) => {
        setTasks(itens.map((item) => item.id === id ? {...item,number : newNumber} : item))
    }

    return(
        <>
        <h1 className={styles.titulo}>Gerenciador de estoque</h1>
        <div className={styles.aplicativo}>

            <FormularioProduto addItem={addItem}></FormularioProduto>
            <ListaEstoque more={more}></ListaEstoque>
        </div>
        </>
    )
}