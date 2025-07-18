#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void process_file(const char* input_path, const char* output_path, const char* password) {
    FILE* input_file = fopen(input_path, "rb");
    if (!input_file) {
        perror("ERROR open source file");
        exit(1);
    }

    FILE* output_file = fopen(output_path, "wb");
    if (!output_file) {
        perror("ERROR create output file");
        fclose(input_file);
        exit(1);
    }

    size_t pass_len = strlen(password);
    if (pass_len == 0) {
        printf("passworld must be exist\n");
        fclose(input_file);
        fclose(output_file);
        exit(1);
    }

    int ch;
    size_t index = 0;
    while ((ch = fgetc(input_file)) != EOF) {
        int processed = ch ^ password[index];
        fputc(processed, output_file);

        index = (index + 1) % pass_len;
    }

    fclose(input_file);
    fclose(output_file);
}

int main(int argc, char* argv[]) {
    if (argc != 5) {
        printf("use:\n");
        printf("  encode: %s encrypt input.jpg output.bin passworld\n", argv[0]);
        printf("  decode: %s decrypt input.bin output.jpg passworld\n", argv[0]);
        return 1;
    }

    const char* mode = argv[1];
    const char* input_path = argv[2];
    const char* output_path = argv[3];
    const char* password = argv[4];

    process_file(input_path, output_path, password);
    
    printf("operation successful end\n");
    return 0;
}