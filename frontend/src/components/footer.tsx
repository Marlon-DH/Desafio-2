type FooterProps = {
    margin: string
}

function Footer({ margin }: FooterProps) {
    return(
       <main>
        <footer className="">
        <div className={`bg-blue-600 min-w-screen ${margin} h-30 `}>
             <h1></h1>
        </div>
       </footer>
       </main>
    )
}

export default Footer