import './App.css';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import PostList from './PostList';
import { PostStoreContext } from './store';

const App = observer(()=>{
  const store = useContext(PostStoreContext)

  const handleFetchPosts =()=>{
    store.fetchPosts();
  }
  return(
    <div>
      <h1>Posts powered by MobX</h1>
      <button onClick={handleFetchPosts}>Fetch Posts</button>
      <PostList />
    </div>
  )
})

export default App;
