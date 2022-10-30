import { ITarefas } from '../../types/tarefas';
import Item from './Item/insex';
import style from './Lista.module.scss';

interface Props {
  tarefas: ITarefas[],
  selecionaTarefa: (selecionaTarefa: ITarefas) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
