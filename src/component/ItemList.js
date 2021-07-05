import Link from 'next/link'
export default function ItemList ({list}){
    const lists = list.map((item)=>(
        <div key={item.id}>
            <Link href="/view/[id]" as={`/view/${item.id}`} ><a>{item.name}</a></Link>
        </div>
    ))
    return(
        <>
            {lists}
        </>
    )
}