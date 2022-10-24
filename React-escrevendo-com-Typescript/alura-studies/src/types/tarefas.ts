export interface ITarefas{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}

export interface IProps {
    children: React.ReactChild;
    type?: "button" | "submit" | "reset" | undefined;
}
