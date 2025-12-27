
const DoctorID = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div>
            <h1 className="text-blue-500 text-3xl font-bold text-center">
                Doctor ID Page - ID: {id}
            </h1>
        </div>
    )
}

export default DoctorID;