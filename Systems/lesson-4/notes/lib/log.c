#include <stdlib.h>
#include <string.h>

#include "log.h"

log_node *constructNode() {
    log_node *newNode = malloc(sizeof(log_node*));
    newNode->content = NULL;
    newNode->next = NULL;

    return newNode;
}

void setNodeContent(log_node *node, char *newContent) {
    char *oldContent = node->content;
    char *copiedNewContent = malloc(strlen(newContent));
    strcpy(copiedNewContent, newContent);

    free(oldContent);
    node->content = copiedNewContent;
}

void deconstructNode(log_node *node) {
    if (node == NULL) return;

    free(node->content);
    deconstructNode(node->next);
    free(node);
}

log_t *constructLog() {
    log_t *newLog = malloc(sizeof(log_t*));
    newLog->first = NULL;
    newLog->last = NULL;

    return newLog;
}

