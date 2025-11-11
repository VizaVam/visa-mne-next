'use client';
import { createContext, useContext, useState } from "react";

const CommentModalContext = createContext();

export function CommentModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCommentModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CommentModalContext.Provider value={{ isModalOpen, openCommentModal, closeModal }}>
      {children}
    </CommentModalContext.Provider>
  );
}

export function useCommentModal() {
  return useContext(CommentModalContext);
}