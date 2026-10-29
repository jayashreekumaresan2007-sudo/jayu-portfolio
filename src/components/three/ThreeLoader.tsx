import { LoadingState } from '../ui/LoadingState'

export function ThreeLoader() {
  return (
    <div className="flex h-full min-h-[320px] items-center justify-center">
      <LoadingState label="Composing the specimen" />
    </div>
  )
}
