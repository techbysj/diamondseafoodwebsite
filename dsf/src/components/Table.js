// src/components/ui/table.js
import React from "react";

export const Table = ({ children, className }) => (
  <table className={`table ${className}`}>{children}</table>
);

export const TableHead = ({ children }) => <thead>{children}</thead>;

export const TableRow = ({ children }) => <tr>{children}</tr>;

export const TableCell = ({ children, className }) => (
  <td className={className}>{children}</td>
);

export const TableBody = ({ children }) => <tbody>{children}</tbody>;
