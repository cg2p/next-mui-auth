import Container from '@mui/material/Container';
import Layout from '@components/Layout';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {  
    const { data: session } = useSession(); 
    // session is always non-null inside this page, all the way down the React tree.  
    return (
        <Layout>
            <Container maxWidth="sm">
                <h1>Profile Page</h1>
                <p>
                    Details about the user:
                    <p> Name: {session.user.name}</p>
                    <p> Email: {session.user.email}</p>
                    <img src={session.user.image}></img>
                </p>
            </Container>
        </Layout>
    )
}

ProfilePage.auth = true;