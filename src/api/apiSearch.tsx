import axios from 'axios';
import { FormattedDataProps } from '../types';

export const apiSearch = async (): Promise<FormattedDataProps | void> => {
    const url: string = 'https://serpapi.com/search';
    const params: {[key: string]: string} = {
        q: "Coffee",
        location: "Austin, Texas, United States",
        google_domain: "google.com",
        engine: "google",
        gl: "us",
        hl: "en",
    };

    return await axios.get(url, { params })
        .then(({ data }) => {
            const formattedData: FormattedDataProps = {
                knowledgeGraph: data.knowledge_graph,
                organicResults: data.organic_results
            };

            return formattedData;
        }).catch(error => {
        console.log(error);
    });
};
