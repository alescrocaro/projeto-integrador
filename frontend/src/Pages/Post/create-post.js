import {Link} from 'react-router-dom';

import Layout from '../../components/Layout';


export default function CreatePost(){
  return (
    <Layout>
      <h1>Create Post</h1>
      <Link to='/'>
        <button>VOLTAR</button>
      </Link>
    </Layout>
  )
}