const Review = async ({ params }: { params: { productID: string,reviewID: string } }) => {
    const { productID , reviewID} = params; 
    return (
        <>
            <h1>Review {reviewID} for product {productID}</h1>
        </>
    );
}

export default Review;
