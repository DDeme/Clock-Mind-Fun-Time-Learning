import { useTranslation } from 'react-i18next'

import { Layout, Skeleton, Main } from '../../ui'

export const GameSkeleton = () => {
    const { t } = useTranslation()

    return (
        <Layout hideNavigation>
            {/* Header Skeleton */}
            <header className="pt-6 pb-3">
                <div className="flex items-center justify-center">
                    {/* Close button skeleton */}
                    <Skeleton
                        variant="circle"
                        width={40}
                        height={40}
                        className="border border-slate-200"
                    />

                    {/* Progress bar skeleton */}
                    <div className="mx-4 flex flex-1 flex-col items-center py-2">
                        <Skeleton
                            variant="square"
                            height={12}
                            className="w-full rounded-full"
                        />
                        <Skeleton
                            variant="text"
                            width="40%"
                            className="mt-1"
                        />
                    </div>

                    {/* Score skeleton */}
                    <div className="flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1">
                        <Skeleton
                            variant="circle"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </header>

            <Main ariaLabel={t('game.gameContent')}>
                {/* Mascot bubble skeleton */}
                <div className="mb-6">
                    <Skeleton
                        variant="square"
                        height={60}
                        className="rounded-2xl"
                    />
                </div>

                {/* Question renderer skeleton (clock area) */}
                <div className="mb-8 flex justify-center">
                    <Skeleton
                        variant="circle"
                        width={200}
                        height={200}
                    />
                </div>

                {/* Answers skeleton */}
                <div className="mb-8 space-y-3">
                    <Skeleton
                        variant="square"
                        height={50}
                        className="rounded-lg"
                    />
                    <Skeleton
                        variant="square"
                        height={50}
                        className="rounded-lg"
                    />
                    <Skeleton
                        variant="square"
                        height={50}
                        className="rounded-lg"
                    />
                    <Skeleton
                        variant="square"
                        height={50}
                        className="rounded-lg"
                    />
                </div>

                {/* Footer skeleton */}
                <div className="flex items-center justify-between">
                    <Skeleton
                        variant="square"
                        width={400}
                        height={68}
                        className="rounded-lg"
                    />
                </div>
            </Main>

            {/* Screen reader announcement */}
            <div
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
            >
                {t('common.loading')}
            </div>
        </Layout>
    )
}
