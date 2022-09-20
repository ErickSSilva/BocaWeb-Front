export const Busca = ({busca, buscaODA}) =>{
    return(
        <div className='containerBusca'>
            <input
            id = 'busca'
            name = 'busca'
            type = 'text'
            value = {busca}
            placeholder = 'O que deseja buscar'
            onChange = {buscaODA} 
            />
        </div>
    )
}