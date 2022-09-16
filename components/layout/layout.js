import Meta from '../meta/meta'
import Header from '../header/header'

export default function Layout({ children }) {
    return (
        <>
            <Meta></Meta>
            <Header></Header>
            <main className='border-t border-slate-200 lg:relative lg:mb-6 lg:ml-[28rem] lg:border-t-0 xl:ml-[30rem]'>
                <div className='relative'>
                    {children}
                </div>
            </main>
        </>
    )
}