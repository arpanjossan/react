
import { useRouter } from 'next/router';

 const post = () => {
    const router = useRouter();

    const handleSubmit = (e:any) => {
      e.preventDefault();
  
      const name = e.target.name.value;
      const age = e.target.age.value;
  
      router.push({
        pathname: '/mypage',
        query: { name, age }
      });
    };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default post