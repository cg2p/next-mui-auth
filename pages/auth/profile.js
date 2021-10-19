import Container from '@mui/material/Container';
import Layout from '@components/Layout';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {  
    const { data: session } = useSession(); 
    // session is always non-null inside this page, all the way down the React tree.  
    return (
        <Layout>
            <h1>Profile Page</h1>
            <Container maxWidth="sm">

                Details about the user:
                <p> Name: {session.user.name}</p>
                <p> Email: {session.user.email}</p>
                <img src={session.user.image}></img>
            </Container>
        </Layout>
    )
}

ProfilePage.auth = true;