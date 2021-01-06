import React from 'react';
import PropTypes from 'prop-types';
import { StyledModal, ModalWrapper, DetailAvatar, DetailWrapper, DetailTitle, DetailData, CloseIcon, CloseButton } from './styled';
import close from '../assets/close.PNG';

const OrganizationModal = ({ organizationData, modalIsOpen, closeModal }) => {
  if (!organizationData) return null;

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <ModalWrapper>
        <DetailAvatar src={organizationData.avatar_url} />
        <CloseButton type="button" onClick={closeModal}>
          <CloseIcon src={close} alt="Close button" />
        </CloseButton>
        <DetailWrapper>
          <DetailTitle>Login</DetailTitle>
          <DetailData>{organizationData.login}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Id</DetailTitle>
          <DetailData>{organizationData.id}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Node Id</DetailTitle>
          <DetailData>{organizationData.node_id}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Url</DetailTitle>
          <DetailData>{organizationData.url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Repos Url</DetailTitle>
          <DetailData>{organizationData.repos_url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Events Url</DetailTitle>
          <DetailData>{organizationData.events_url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Hooks Url</DetailTitle>
          <DetailData>{organizationData.hooks_url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Issues Url</DetailTitle>
          <DetailData>{organizationData.issues_url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Members Url</DetailTitle>
          <DetailData>{organizationData.members_url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Public Members Url</DetailTitle>
          <DetailData>{organizationData.public_members_url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Avatar Url</DetailTitle>
          <DetailData>{organizationData.avatar_url}</DetailData>
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle>Description</DetailTitle>
          <DetailData>{organizationData.description}</DetailData>
        </DetailWrapper>
      </ModalWrapper>
    </StyledModal>
  );
};

OrganizationModal.propTypes = {
  organizationData: PropTypes.object,
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default OrganizationModal;
