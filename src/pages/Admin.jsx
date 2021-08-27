import React from "react";
import Title from "../components/Title";
import EditSweets from "../components/EditSweets";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import { connect } from "react-redux";
import { openCreatePastryModalAction, closeCreatePastryModalAction } from "../redux/actions/appActions";
import Form from "../components/Form";

function Admin ({isOpenModal, openModal, closeModal}) {
  return(
    <div>
      <Title/>
      <EditSweets/>
      <Button onClick={openModal}>
        Add new shop item
      </Button>
      <Modal closeModal={closeModal} isOpenModal={isOpenModal}>
        <Form title="Create new item in shop"/>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  isOpenModal: state.app.modals.isOpenCreatePastryModal,
});
const mapDispatchToProps = {
  openModal: openCreatePastryModalAction,
  closeModal: closeCreatePastryModalAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);