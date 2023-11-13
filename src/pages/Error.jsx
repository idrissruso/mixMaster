import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-green-50">
      <h1 className="text-2xl font-bold">😞Oops!!</h1>
      <p className="text-4xl font-extrabold">{error.status}</p>
      <p>Page {error.statusText}</p>
    </div>
  )
}

export default Error
