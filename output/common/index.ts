import { useMutation, useQuery } from "react-query";
import { FetchError } from "@api/common/types";
import { apiClient } from "@api/";
import { DownloadProtectedFileRequest, DownloadProtectedFileResponse } from "./types";

export const QueryKeys = {
}
    ;

/** Скачать приватный файл */
export function useDownloadProtectedFile() {
    return useMutation<DownloadProtectedFileResponse, FetchError, DownloadProtectedFileRequest>(
        (data) => apiClient.post(`/common/files/download-protected`, { data }),
    );
}
