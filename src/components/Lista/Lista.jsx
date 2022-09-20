export const Lista = ({id, nome, usuario, descricao, data_insercao, palavras_chave}) =>{
    return(
    <div key={id} className='conteudoBusca'>
        <h1 className="conteudoODA" id='nome'>Nome: {nome}</h1>
        <p className="conteudoODA"><strong>Usuário:</strong> {usuario}</p>
        <p className="conteudoODA"><strong>Descrição:</strong> {descricao}</p>
        <p className="conteudoODA"><strong>Data de inserção:</strong> {data_insercao}</p>
        <p className="conteudoODA"><strong>Palavras chave:</strong> {palavras_chave}</p>
    </div>
    )
}