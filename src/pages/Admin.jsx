import React from "react";
import Title from "../components/Title";
import styled from "styled-components";
import EditSweets from "../components/EditSweets";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import { connect } from "react-redux";
import { openCreatePastryModalAction, closeCreatePastryModalAction } from "../redux/actions/appActions";

const Container = styled.div`
  padding-bottom: 100px;
`;

function Admin ({isOpenModal, openModal, closeModal}) {
  return(
    <Container>
      <Title/>
      <EditSweets/>
      <Button onClick={openModal}>
        Add new shop item
      </Button>
      <Modal closeModal={closeModal} isOpenModal={isOpenModal}>

      </Modal>
    </Container>
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