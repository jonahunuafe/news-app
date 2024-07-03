export default function NotFound() {
    return (
        <main className="flex flex-col align-middle justify-center gap-6 pt-12">
            <h1 className="text-center text-red-500 text-lg md:text-xl font-medium">
                News not found
            </h1>
            <p className="text-center text-red-500 text-lg md:text-xl px-4 font-medium">
                Unfortunately, we could not find the requested page or News data.
            </p>
        </main>
    )
}