"use client"
import Link from 'next/link';
import {Navbar,Container,Nav} from  "react-bootstrap"
import { usePathname } from "next/navigation"
export default  function NavBar(){
    const PathName = usePathname();
 return <Navbar bg="primary" variant="light" expand="sm" sticky="top">
     <Container>
         {/*硬刷新我们会丢失任何缓存*/}
         <Navbar.Brand as={Link} href="/">
          React-Bootstrap
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="main-navbar" />
         <Navbar.Collapse id="main-navbar">
             <Nav>
                 <Nav.Link href="/static" active={PathName == '/static'}>hello</Nav.Link>
             </Nav>
             <Nav>
                 <Nav.Link href="/dynamic" active={PathName == '/dynamic'}>dynamic</Nav.Link>
             </Nav>
             <Nav>
                 <Nav.Link href="/ISR" active={PathName == '/ISR'}>isr</Nav.Link>
             </Nav>
         </Navbar.Collapse>
     </Container>
 </Navbar>
}