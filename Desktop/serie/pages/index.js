export default function Home({ users }) {
  return (
    <div>
      { users.map((user, index) => (
        <h1 key={index}>{user.name}</h1>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8080/user");
  const data = await response.json();

  return {
    props: {
      users: data.users.docs
    },
    revalidate: 30
  }
}
