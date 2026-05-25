"use client";

import { useState } from "react";
import { Button } from "@/kui/Button";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalContent,
  ModalFooter,
} from "@/kui/Modal";

export const ModalPreview = () => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-500 text-sm tracking-wide">
        Click the buttons below to trigger a modal.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="ghost" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader onClose={() => setOpen(false)}>
            <ModalTitle>Welcome to KUI</ModalTitle>
            <ModalDescription>
              A minimal dark component library.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
            This is the modal content area. You can put anything here forms,
            images, text, or other components.
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" size="sm" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>

        <Button variant="danger" onClick={() => setConfirmOpen(true)}>
          Delete Item
        </Button>
        <Modal
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          size="sm"
        >
          <ModalHeader onClose={() => setConfirmOpen(false)}>
            <ModalTitle>Delete Note</ModalTitle>
            <ModalDescription>This action cannot be undone.</ModalDescription>
          </ModalHeader>
          <ModalContent>
            Are you sure you want to delete this note? It will be permanently
            removed.
          </ModalContent>
          <ModalFooter>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => setConfirmOpen(false)}
            >
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
