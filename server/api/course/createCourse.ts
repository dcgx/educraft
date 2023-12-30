export default defineEventHandler(async (event) => {
    const { getSession } = useAuth();
    const session = await getSession();
    console.log({ session })

    return {
        statusCode: 200,
        body: {}
    }
})