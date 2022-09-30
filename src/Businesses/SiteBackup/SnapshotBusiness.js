import React from "react";
import { Row, Col, Button, ListGroup } from "react-bootstrap";
import BackupNameHelper from "Helpers/BackupNameHelper";
import { Icon } from "@iconify/react";
import resetIcon from "@iconify/icons-system-uicons/reset";
const snapshotGenerate = (data, restore, restoreFunction) => {
	const restoreLoading = restore.loading;
	const list = data.map((snapshot) => {
		return (
			<ListGroup.Item className="pr-1">
				<Row key={snapshot.id}>
					<Col lg="8 pt-2 col-8">
						{BackupNameHelper(snapshot.name)}
					</Col>
					<Col lg="2"></Col>
					<Col lg="2 col-4 text-center">
						<Button
							className={`updatebtn mt-1 ${
								restoreLoading ? "loading" : ""
							}`}
							onClick={() => restoreFunction()}
						>
							<span className="mr-2">
								<Icon
									icon={resetIcon}
									width="16px"
									stroke="2"
									stroke-width="2"
								/>
							</span>
							Restore
						</Button>
					</Col>
				</Row>
			</ListGroup.Item>
		);
	});
	return list;
};

const SnapshotBusiness = {
	snapshotGenerate,
};

export default SnapshotBusiness;
