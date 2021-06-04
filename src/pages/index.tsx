import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  // code below should lint
  console.log('a');
  let x = 1;
  console.log(x);
  return (
    <div>
      <h1>Hello Next World!</h1>
    </div>
  );
};

export default IndexPage;
