import { Suspense } from 'react'
import { RouterProvider } from 'react-router'

import { Loading } from './components/Loading/Loading'
import { router } from './routes'

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App
