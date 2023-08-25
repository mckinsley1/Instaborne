import { ReactNode } from 'react';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}