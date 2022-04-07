import React from "react";

//create your first component
const Card = () => {
	return (
		<div className="col">
			<div className="card shadow-sm">
				<img
					className="bd-placeholder-img card-img-top"
					src="https://picsum.photos/325/500"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
