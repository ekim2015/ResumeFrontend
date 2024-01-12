import styles from '@/styles/Dashboard.module.css'

// sidebar + basically one page website
export default function Dashboard() {
    return (
        <div className='flexContainer'>
            <div className='sideBar'>
                <p>Home</p>
                <p>Upload</p>
                <p>Settings</p>
                <p>About</p>
            </div>
            {/* divided into grids */}
            <div className='mainContainer'>
                <p>Hello!</p>
            </div>
        </div>
    )
}