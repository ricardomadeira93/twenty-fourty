'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '../ui/modal';



export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      title='Create a store'
      description='Create a store so you can manage and add your products!'
    >Store Creation Component</Modal>
  );
};
