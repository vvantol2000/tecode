import React, {Component} from 'react';

class Modal extends Component {
	render() {
		return (
			<div>
				{/* <!-- Button trigger modal -->*/}
				<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">
					Launch modal
				</button>

				{/* <!-- Modal -->*/}
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title" id="myModalLabel">Modal title</h4>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
							</div>
							<div class="modal-body">
								<p>Consectetur adipisicing elit. Nemo architecto debitis dolorum ullam in ut sint, odit maiores eaque explicabo, repellendus minima soluta sunt! Nisi minima blanditiis voluptate, ut atque.</p>
								<p>Culpa expedita! Quisquam, itaque officiis nisi nam doloribus explicabo possimus, dolorum alias provident maxime temporibus, enim voluptatibus! Molestias, accusantium cum impedit sint velit exercitationem deserunt, corporis magni provident earum, ullam iusto voluptatem iste animi inventore ab cupiditate quod laborum quasi libero doloremque obcaecati eius. Ut, reprehenderit optio unde accusantium quia qui! Debitis delectus corporis aspernatur nemo aut, odio harum ea repellendus quidem, saepe, incidunt? Assumenda deserunt unde minima aspernatur ducimus velit molestiae, minus eius inventore, dolore temporibus odio distinctio optio.</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-sm btn-dark" data-dismiss="modal">Close</button>
								<button type="button" class="btn btn-sm btn-default">Save changes</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Modal;