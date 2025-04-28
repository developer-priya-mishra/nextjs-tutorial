const Product = async ({ params }: { params: { productID: string } }) => {
    const { productID } = params; // Destructure productID directly from params
    return (
        <>
            <h1>Detailed Product Page for {productID}</h1>
        </>
    );
}

export default Product;
