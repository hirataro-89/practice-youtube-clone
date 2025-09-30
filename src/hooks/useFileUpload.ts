import { useState } from "react";

interface UseFileUploadOptions {
	acceptTypes: string[];
	onFileSelect: (file: File | null) => void;
}

export function useFileUpload({ acceptTypes, onFileSelect }: UseFileUploadOptions) {
	const [isDragOver, setIsDragOver] = useState(false);

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		setFile(file);
	};

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDragOver(false);
	};

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDragOver(false);
		const file = event.dataTransfer.files?.[0];
		setFile(file);
	};

	const setFile = (file?: File) => {
		if (file != null && acceptTypes.some((type) => file.type.startsWith(type))) {
			onFileSelect(file);
		}
	};

	return {
		isDragOver,
		handleFileSelect,
		handleDragOver,
		handleDragLeave,
		handleDrop,
	};
}
