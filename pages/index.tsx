import Typography from '@mui/material/Typography'
import { Inter } from 'next/font/google'
import { Layout } from '../components/layouts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title=''>
      <Typography variant='h1' color='primary' >Hola mundo</Typography>
    </Layout>
  )
}
