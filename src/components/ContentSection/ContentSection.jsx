

function ContentSection(props)
{
    return(
        <section>
            <h2>{props.title}</h2>
            <div className="container">{props.children}</div>
        </section>
    )
}
export default ContentSection;