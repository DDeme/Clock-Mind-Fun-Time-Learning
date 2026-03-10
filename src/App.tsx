import { Suspense } from 'react'
import { RouterProvider } from 'react-router'

import { ErrorBoundary } from './components/system/ErrorBoundary'
import { Loading } from './components/ui'
import { router } from './routes'

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
            </Suspense>
        </ErrorBoundary>
    )
}

export default App
