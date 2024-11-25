export default function AppFooter() {


    return (
        <footer>
            <div className="container pt-5">
                <h5>&copy; <span>{new Date().getFullYear()}</span> FDC</h5>
            </div>
        </footer>
    )
}