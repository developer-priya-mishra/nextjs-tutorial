const Product = async ({ params }: { params: Promise <{ productID: string }> }) => {
    const { productID } = await params; // Destructure productID directly from params
    return (
        <>
            <h1>Detailed Product Page for {productID}</h1>
        </>
    );
}

export default Product;
